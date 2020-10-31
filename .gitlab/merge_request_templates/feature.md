# TEST FORMAT FOR REQUEST TEMPLATE {YOUR PROJECT}

- [ ] Check conflicts
- [ ] Check console logs, for logging use logger from `src/utils/logger`
- [ ] Text constants must be in translations


## DESCRIPTION:
- [ ] Your task {JIRA TICKET}
  - [ ] Sub-task
  - [ ] Sub-task


## OPTIONALS:
- [ ] Check on both platform (ios and android)
- [ ] Completed task
- [ ] Is the code better than before?
- [ ] Is thr code up-to-date with develop branch?
 
## Over or under-logging?: 
- Are there unnecessary logs that were only needed during development?
- Are there unnecessary alerts?

## Does PR contain required flow coverage?
- Do flow types use “exact” object notation ({||})?

## Is the PR small enough? (It's better to provide several small PR's than one large)

## Does the fix actually solve the problem?
- Always good to test it out. Better to fail during development rather than failing on QA.

## The ticket is understandable for other developers and QA

## Does the code pass on the Jenkins build?
- Adding some third-party packages can lead to jenkins builds fail

## If some functionality is partially done then provide TODO
- Format TODO(<developer_name>): <description>

