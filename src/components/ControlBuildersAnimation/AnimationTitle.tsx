import * as React from "react";

export default function AnimationTitle(props: any) {
    const Visible = function (target: any) {
        const getBoundingClientRect = target.getBoundingClientRect()
        // Все позиции элемента
        const targetPosition = {
                top: window.pageYOffset + getBoundingClientRect.top,
                left: window.pageXOffset + getBoundingClientRect.left,
                right: window.pageXOffset + getBoundingClientRect.right,
                bottom: window.pageYOffset + getBoundingClientRect.bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа

            const top = getBoundingClientRect.top < 0 ? getBoundingClientRect.top * -1 : 0,
                bottom = getBoundingClientRect.bottom,
                height = getBoundingClientRect.height,
                topProcent = parseFloat((top / height).toFixed(2)),
                bottomProcent = parseFloat((bottom / (height)).toFixed(2)),
                centerProcent = parseFloat(((((getBoundingClientRect.top - height) * -1) - 1) / height).toFixed(2)),
                centerProcentBottom = parseFloat(((getBoundingClientRect.top / height)).toFixed(2))

            console.clear()

            return {
                topProcent: topProcent,
                bottomProcent: bottomProcent < 1 ? bottomProcent : 1,
                centerProcent: centerProcent < 1 ? centerProcent : 1,
                centerProcentBottom: centerProcentBottom < 0 ? 0 : centerProcentBottom,
                top: top,
                bottom: bottom,
                height: height,
            }
        }
    };

    const domRef: any = React.useRef();
    const titleRef: any = React.useRef();

    React.useEffect(() => {
        if (window.innerWidth > 1024) {
            window.addEventListener('scroll', () => {
                const titleCoords = Visible(domRef.current)

                let min = props.min ? 0.8 - props.min : 0.8

                if (window.innerHeight > 1500) {
                    min = props.min ? 0.7 - props.min : 0.7
                } else
                if (window.innerHeight > 1200) {
                    min = props.min ? 0.6 - props.min : 0.6
                } else
                if (window.innerHeight > 900) {
                    min = props.min ? 0.5 - props.min : 0.5
                } else
                if (window.innerHeight > 768) {
                    min = props.min ? 0.4 - props.min : 0.4
                } else {
                    min = props.min ? 0.3 - props.min : 0.3
                }

                if (titleCoords) {
                    if (titleCoords.bottomProcent >= 1) {
                        titleRef.current.style.opacity = titleCoords.centerProcent
                        titleRef.current.style.transform = 'translateY(-' + titleCoords.centerProcentBottom * 800 + 'px) scale(' + Math.max(0.6, titleCoords.centerProcent) + ')';
                    } else {
                        const coords = (Math.min(min, titleCoords.topProcent) * 900)
                        titleRef.current.style.transform = 'translateY(' + coords + 'px)';
                    }
                }
            })
        }
    }, []);


    return (
        <div className='scroll-page' ref={domRef}>
            <div className="scroll-page__item" ref={titleRef}>
                {props.children}
            </div>
        </div>
    );
}