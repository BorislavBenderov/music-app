import PlayPause from './PlayPause';

const SongCard = ({ song, i }) => {
  
  const activeSong = 'test';
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5
  bg-opacity-80 backdrop-blur-sm animate-slideup">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center
      items-center bg-black bg-opacity-50 group-hover:flex
      ${activeSong.title === song.title ? 'flex bg-black bg-opacity-70'
            : 'hidden'}`}>
              <PlayPause />
        </div>
        <img src={song.images?.coverart} alt="" />
      </div>
    </div>
  );
}

export default SongCard;
