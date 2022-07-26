export const trending = (req, res) => {
  const videos = [
    {
      title: "first Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes age",
      views: 59,
      id: 1,
    },
    {
      title: "second Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes age",
      views: 59,
      id: 1,
    },
    {
      title: "third Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes age",
      views: 59,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const deleteVideo = (req, res) => res.send("Delete Video");
export const search = (req, res) => res.send("Search Video");
export const upload = (req, res) => res.send("Upload Video");
