
export default (app) => {
  app.log.info("First PR Bot is alive and watching!");

  app.on("pull_request.opened", async (context) => {
   
    const user = context.payload.pull_request.user.login;
    const authorAssociation = context.payload.pull_request.author_association;

    app.log.info(`PR opened by ${user} (${authorAssociation})`);

    const targetRoles = ["NONE", "FIRST_TIMER", "FIRST_TIME_CONTRIBUTOR", "OWNER"];

    if (targetRoles.includes(authorAssociation)) {

   
      const message = `
👋 Hi @${user}! The **First-PR-Bot** is working!

Since this is a test, here is your checklist:
- [ ] Bot is installed successfully
- [ ] Permissions are correct
- [ ] You are ready for the Developer Program!

_Go ahead and merge this PR!_
      `;


      const comment = context.issue({ body: message });
      await context.octokit.issues.createComment(comment);
      app.log.info("Comment posted successfully!");
    }
  });
};
