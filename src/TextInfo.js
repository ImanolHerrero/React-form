import React from 'react';
import './styles/TextInfo.scss';

export default function TextInfo() {
    return (
        <div className="text-container">
            <h1>Learn coding by watching others!</h1>
            <div className="subtext-container">
                <div className="whitebar"></div>
                <p>See how <span>experienced developers</span> solve problems in real-time. Watching scripted tutorials is great,
                    but understanding how developers think is <span>invaluable.</span></p>
            </div>
        </div>
    )
}
