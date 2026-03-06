import { apiInitializer } from "discourse/lib/api";

export default apiInitializer((api) => {
  api.onPageChange(() => {
    document.body.classList.add("sparq-theme");

    if (document.querySelector('.page-not-found') && !Discourse.User.current()) {
      window.location.href = '/login';
    }
  });

  
});
