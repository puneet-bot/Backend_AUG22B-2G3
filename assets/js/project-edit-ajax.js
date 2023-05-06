{
  function editProject(e) {
    // console.log("In AJAX",e.id);
    // edit-btn_6452969c19acf86881cd17e3
    let projectID = e.id.split("_")[1];
    console.log(projectID);
    let projectForm = $(`#project-form-${projectID}`);
    console.log(projectForm);
    projectForm.submit(function (e) {
      e.preventDefault();
      $.ajax({
        type: "post",
        url: "/func/edit",
        data: projectForm.serialize(),
        success: function (data) {
          console.log(data);
          $(`#exampleModal${projectID}`).hide();
              $(".modal-backdrop").remove();
        },
      });
    });
  }

  //   let createPost = function () {
  //     let postForm = $('#new-post-form');
  //     postForm.submit(function (e) {
  //         //preventing default actions
  //         e.preventDefault();
  //         $.ajax({
  //             type: 'post',
  //             url: '/posts/create',
  //             data: postForm.serialize(),
  //             success: function (data) {
  //                 console.log(data);
  //                 let newPostData=newPost(data.data.post);
  //                 $(' #post-list-container').prepend(newPostData);
  //                 //mentioning that this class is under newPostData in jquery...
  //                 // console.log('Dhan Nirankar Ji')
  //                 deletePost($('.delete-post-button',newPostData));
  //                 // addComments();
  //                 new ToggleLike($(' .toggle-like-button',newPostData));
  //             }, error: function (error) {
  //                 console.log(error.responseText);
  //             }
  //         })
  //     })
}
