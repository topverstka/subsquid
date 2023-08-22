import React from 'react';
import "./FadeInSection.scss";

export function FadeInSection(props: any) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef: any = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting)
                    setVisible(true)
            });
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}