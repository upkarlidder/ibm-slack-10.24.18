# Create and Populate Cloudant Database

## Launch IBM Function

1. Sign into [IBM Cloud](https://console.bluemix.net).

    ![IBM Sign up](assets/cloudant-start.jpg)

2. Click on `Catalog` and enter `function` in the search field. Select the `Functions` service by IBM.
  
    ![IBM Sign up](assets/ibm-function-catalog.jpg)

3. Launch the IBM Function page by clicking on `Start Creating`.
  
    ![IBM Sign up](assets/ibm-function-launch.jpg)

4. If you get the error below, close the dialog and pick `US South` 

    ![IBM Sign up](assets/ibm-function-launch-error.jpg)

    ![IBM Sign up](assets/ibm-function-launch-error-fix.jpg)## Create an action to get three talks for a given `tag/track`

## Create an action to get a talks by track/tag

5. Click `Actions` to go to the main page.

    ![IBM Sign up](assets/ibm-function-go-home.jpg)

    You should see the function you created in the previous step.
    
    ![IBM Sign up](assets/ibm-function-go-home-2.jpg)


6. Click on `Create` to create a new action. Pick `Create Action`. 

    ![IBM Sign up](assets/ibm-function-new-action.jpg)

7. Give your action the name `confbot-get-track-talks`. Pick `confbot` as the enclosing package.

    ![IBM Sign up](assets/ibm-function-track-talks-create.jpg)

8. Once you click `Create`, you will be brought into the action.

    ![IBM Sign up](assets/ibm-function-track-talks-create-2.jpg)

9. Click on params and set the following.

    ![IBM Sign up](assets/ibm-function-track-talks-params.png)

10. Click on `code` and add the contents of the file `ibm-function/confbot-get-track-talks.js` to the action.

    ![IBM Sign up](assets/ibm-function-track-talks-code.jpg)

11. Click on `invoke` to run the function. You should see three talks with the tags `scala` in the output.

    ![IBM Sign up](assets/ibm-function-track-talks-invoke.jpg)

## Create an action to format for Slack

12. Click `Actions` to go to the main page.

    ![IBM Sign up](assets/ibm-function-go-home.jpg)

13. Click on `Create` to create a new action. Pick `Create Action`. 

    ![IBM Sign up](assets/ibm-function-new-action.jpg)

14. Give your action the name `confbot-post-slack`. Pick `confbot` as the enclosing package.

    ![IBM Sign up](assets/ibm-function-post-slack-create.jpg)

15. Once you click `Create`, you will be brought into the action.

    ![IBM Sign up](assets/ibm-function-post-slack-create-2.jpg)

16. Click on params and set the following.

    ![IBM Sign up](assets/ibm-function-post-slack-params.jpg)

17. Click on `code` and add the contents of the file `ibm-function/confbot-post-slack.js` to the action.

    ![IBM Sign up](assets/ibm-function-post-slack-code.jpg)
### [Go back to main page](README.md)
