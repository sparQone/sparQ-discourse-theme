import { apiInitializer } from "discourse/lib/api";

export default apiInitializer((api) => {
  api.onPageChange(() => {
    document.body.classList.add("sparq-theme");

    console.log('before refresh');

    if (document.querySelector('.page-not-found') && !Discourse.User.current()) {
      console.log('refresh here');
      window.location.href = '/login';
    }
  });

  
});
