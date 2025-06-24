import React from "react";
import "./styles.css";

export default function Card({ title, description, link, image }) {
    return (
        <div className="card zoom" >
            <a href={link}>
                <h2 className="card-title start">{title}</h2>
                <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px', marginBottom: '12px' }} />
                <p className="card-description">{description}</p>
            </a>
        </div>
    );
}