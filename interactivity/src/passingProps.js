function PlayButton({moviename})
{
    function handlePlayClick() {
        alert("Playing!");
    }

    return(
        <div>
            <button onClick={handlePlayClick}>Play {moviename}</button>
        </div>
    );
}

function UploadButton({fullmovie})
{
    function handleUploadClick()
    {
        alert("Uploading!");
    }

    return(
        <div>
            <button onClick={handleUploadClick}>Upload {fullmovie}</button>
        </div>
    );
}

export default function Toolbar()
{
    return(
        <div>
            <PlayButton moviename="Kalki" />
            <UploadButton fullmovie="RRR" />
        </div>
    );
}

