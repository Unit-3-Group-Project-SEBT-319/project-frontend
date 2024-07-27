const Sidebar = () => {
  return (
    <div className="sidebar">
      <Playlist />
      <Categories />
      <RecommendedSongs />
      <NowPlaying />
    </div>
  );
};

export default Sidebar;
