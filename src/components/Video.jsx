const Video = () => {
    return ( 
        <section>
            <video style={{margin:"30px 0 0 0",maxWidth:"800px"}} width="100%" height="100%" controls="controls">
                <source src="movie.mp4" type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        </section>
     );
}
 
export default Video;