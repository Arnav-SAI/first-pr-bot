/**
 * This is the main logic for first-pr-bot
 * @param {import('probot').Probot} app
 */
export default (app) => {
  app.log.info("First PR Bot is alive and watching!");

  app.on("pull_request.opened", async (context) => {
    // 1. Get the username
    const user = context.payload.pull_request.user.login;
    const authorAssociation = context.payload.pull_request.author_association;

    app.log.info(`PR opened by ${user} (${authorAssociation})`);

    // 2. CHECK: Is this a new contributor? 
    // "OWNER" is included here for your testing purposes.
    const targetRoles = ["NONE", "FIRST_TIMER", "FIRST_TIME_CONTRIBUTOR", "OWNER"];

    if (targetRoles.includes(authorAssociation)) {

      // 3. The Message
      const message = `
👋 Hi @${user}! The **First-PR-Bot** is working!

Since this is a test, here is your checklist:
- [ ] Bot is installed successfully
- [ ] Permissions are correct
- [ ] You are ready for the Developer Program!

_Go ahead and merge this PR!_
      `;

      // 4. Post the comment
      const comment = context.issue({ body: message });
      await context.octokit.issues.createComment(comment);
      app.log.info("Comment posted successfully!");
    }
  });
};