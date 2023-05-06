const express = require("express");
const router = express.Router();
const projectModel = require("../models/Project");

router.post("/delete", async function (req, res) {
  console.log("Deleting", req.body);
  let deletedProject = await projectModel.findByIdAndDelete(req.body.project);
  console.log(deletedProject);
  res.redirect("/");
});

router.post("/edit", async function (req, res) {


  if(req.xhr){
    console.log("req.body: ", req.body);
    updatedData={
      name: req.body.project_name,
    link: req.body.project_link,
    description: req.body.project_description,
    image: req.body.project_link1,
    category: req.body.project_category,
    repo: req.body.project_repo,
    }
    let updatedProject = await projectModel.findByIdAndUpdate(req.body.project_id, updatedData, { new: true, runValidators: true })

    // console.log("post-detail",post_detail);
    return res.status(200).json({
        data:{
            project:updatedProject,
        },
        message:"Post Created!"
    })
}
  // .then(project => {
  //   if (!project) {
  //     console.log(`No project found with ID ${req.body.project_id}`);
  //   } else {
  //     console.log("Project updated successfully", project);
  //   }
  // })
  // .catch(err => console.log(`Error: ${err}`));

  // return res.redirect("/");
});

//exporting router as variable to the caller
module.exports = router;
