<<<<<<< HEAD
import React, { useRef, useState, useEffect } from 'react';
import './VideoPlayer.css'; // Custom CSS for styling

const Enigma = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [context, setContext] = useState(null);

    useEffect(() => {
        // Set up the canvas drawing context
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        setContext(ctx);

        // Resize canvas to match the video size
        const resizeCanvas = () => {
            if (videoRef.current) {
                canvas.width = videoRef.current.offsetWidth;
                canvas.height = videoRef.current.offsetHeight;
            }
        };

        resizeCanvas();

        // Listen for window resize to adjust the canvas size dynamically
        window.addEventListener('resize', resizeCanvas);
        return () => window.removeEventListener('resize', resizeCanvas);
    }, []);

    const handleMouseDown = (e) => {
        setIsDrawing(true);
        draw(e.nativeEvent); // Start drawing immediately
    };

    const handleMouseMove = (e) => {
        if (!isDrawing) return;
        draw(e.nativeEvent);
    };

    const handleMouseUp = () => {
        setIsDrawing(false);
        context.beginPath(); // Stop drawing
    };

    const draw = (nativeEvent) => {
        const { offsetX, offsetY } = nativeEvent;

        if (!context) return;

        context.lineWidth = 3;
        context.lineCap = 'round';
        context.strokeStyle = 'red'; // Pen color

        context.lineTo(offsetX, offsetY);
        context.stroke();
        context.beginPath();
        context.moveTo(offsetX, offsetY);
    };

    const handlePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    return (
        <div className="video-container">
            <video ref={videoRef} className="video-player" controls>
                <source src="/3195394-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <canvas
                ref={canvasRef}
                className="drawing-canvas"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp} // Ensure drawing stops when the mouse leaves the canvas
            ></canvas>

            <button onClick={handlePlayPause}>Play/Pause</button>
        </div>
    );
};

=======
import React, { useRef, useState, useEffect } from 'react';
import './VideoPlayer.css'; // Custom CSS for styling

const Enigma = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [context, setContext] = useState(null);

    useEffect(() => {
        // Set up the canvas drawing context
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        setContext(ctx);

        // Resize canvas to match the video size
        const resizeCanvas = () => {
            if (videoRef.current) {
                canvas.width = videoRef.current.offsetWidth;
                canvas.height = videoRef.current.offsetHeight;
            }
        };

        resizeCanvas();

        // Listen for window resize to adjust the canvas size dynamically
        window.addEventListener('resize', resizeCanvas);
        return () => window.removeEventListener('resize', resizeCanvas);
    }, []);

    const handleMouseDown = (e) => {
        setIsDrawing(true);
        draw(e.nativeEvent); // Start drawing immediately
    };

    const handleMouseMove = (e) => {
        if (!isDrawing) return;
        draw(e.nativeEvent);
    };

    const handleMouseUp = () => {
        setIsDrawing(false);
        context.beginPath(); // Stop drawing
    };

    const draw = (nativeEvent) => {
        const { offsetX, offsetY } = nativeEvent;

        if (!context) return;

        context.lineWidth = 3;
        context.lineCap = 'round';
        context.strokeStyle = 'red'; // Pen color

        context.lineTo(offsetX, offsetY);
        context.stroke();
        context.beginPath();
        context.moveTo(offsetX, offsetY);
    };

    const handlePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    return (
        <div className="video-container">
            <video ref={videoRef} className="video-player" controls>
                <source src="/3195394-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <canvas
                ref={canvasRef}
                className="drawing-canvas"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp} // Ensure drawing stops when the mouse leaves the canvas
            ></canvas>

            <button onClick={handlePlayPause}>Play/Pause</button>
        </div>
    );
};

>>>>>>> 9624458 (Your commit message)
export default Enigma;