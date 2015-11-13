/**
 * Roll 是一个图片轮番滚动的 jQuery 插件
 *
 * v1.0
 *
 * Copyright 2015 Mao Wenchao
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

;
(function($) {
    $.extend($.fn, {
        roll: function(options) {
            var o = $.extend(true, {
                item: null, // 子元素选择器，为空则所有子元素
                switchDelay: 4000, // 切换速度
                dynamicLength: false, // 动态计算尺寸(如果内部要滚动的元素是JS动态插入则设置为true)
                easing: "swing",
                prev: "",
                next: "",
                autoStop: false, // 鼠标移动自动停止，移出重新开始
                location: {
                    switchOnClick: true,
                    addClass: "sel", // 自动添加类名
                    element: "", // 位置切换
                    childTemp: "" // 位置元素
                }
            }, options);

            o.location.element = $.trim(o.location.element);
            o.location.childTemp = $.trim(o.location.childTemp);

            function appendLocationElement(box) {
                box.siblings(o.location.element)
                    .empty()
                    .append(
                        new Array(
                            box.children(o.item).length + 1
                        ).join(o.location.childTemp)
                    )
                    .children()
                    .first()
                    .addClass(o.location.addClass);
            }

            return this.each(function(index, el) {
                var timer, currentIndex = 0;
                var box = $(el);
                var len = box.children(o.item).length;
                var oldLen = len;
                var hasLocation = o.location && o.location.element && o.location.childTemp;
                var loc = box.siblings(o.location.element);

                var prev = box.siblings(o.prev);
                var next = box.siblings(o.next);

                function doAnimate() {
                    var width;

                    if (o.dynamicLength) {
                        oldLen = len;
                        len = box.children(o.item).length;

                        if (oldLen != len && hasLocation) {
                            appendLocationElement(box);
                        }
                    }

                    width = currentIndex == -1 ? 0 : currentIndex * box.eq(0).width();

                    currentIndex = currentIndex < 0 ? 0 : currentIndex;
                    currentIndex = currentIndex >= len ? len : currentIndex;

                    if (hasLocation) {
                        loc.find(":eq(" + currentIndex + ")")
                            .addClass(o.location.addClass)
                            .siblings()
                            .removeClass(o.location.addClass);
                    }

                    box.stop().animate({
                            scrollLeft: width ? (width + "px") : "0"
                        },
                        1000,
                        o.easing,
                        function() {
                            currentIndex++;

                            currentIndex = currentIndex < 0 ? 0 : currentIndex;
                            currentIndex = currentIndex >= len ? -1 : currentIndex;

                            start();
                        }
                    );
                }

                function start() {
                    if (timer) {
                        clearTimeout(timer);
                    }

                    timer = setTimeout(function() {
                        doAnimate();
                    }, o.switchDelay);
                }

                function stop() {
                    clearTimeout(timer);
                }

                prev.on("click", function() {
                    stop();
                    currentIndex = currentIndex - 2;
                    doAnimate();
                    start();
                });

                next.on("click", function() {
                    stop();
                    doAnimate();
                    start();
                });

                if (o.autoStop) {
                    box.on("mouseenter", function() {
                        stop();
                    }).on("mouseleave", function() {
                        start();
                    });
                }

                if (o.location.switchOnClick) {
                    loc.on("click", "*", function() {
                        stop();
                        currentIndex = $(this).index();
                        doAnimate();
                    });
                }

                // 添加位置元素
                if (hasLocation) {
                    appendLocationElement(box);
                }

                currentIndex = -1;
                start();
            });
        }
    });
}(jQuery));