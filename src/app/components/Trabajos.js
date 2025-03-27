"use client";
import { useState, useEffect, useRef } from "react";
import "./Trabajos.css";

function Trabajos() {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const videosUrls = [
      "/videos/video1.mp4",
      "/videos/video2.mp4",
      "/videos/video3.mp4",
    ];
    setVideos(videosUrls);
    setCurrentVideo(videosUrls[Math.floor(Math.random() * videosUrls.length)]);
  }, []);

  useEffect(() => {
    if (videos.length === 0) return;

    const interval = setInterval(() => {
      if (videoRef.current && videoRef.current.paused) {
        setCurrentVideo((prevVideo) => {
          const nextIndex = (videos.indexOf(prevVideo) + 1) % videos.length;
          return videos[nextIndex];
        });
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [videos]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [currentVideo]);

  return (
    <section className="trabajos wrapper" id="trabajos">
      <h2 className="trabajos-title">NUESTROS TRABAJOS</h2>
      <p className="trabajos-desc">
        Aquí te mostramos algunos de nuestros trabajos más recientes, donde te
        invitamos a ver cómo nos encargamos de controlar plagas de manera
        profesional y eficiente.
      </p>
      {currentVideo && (
        <div className="video-container">
          <video className="video" ref={videoRef} controls preload="metadata">
            <source src={currentVideo} type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </div>
      )}
    </section>
  );
}

export default Trabajos;