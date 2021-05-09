# CDK TypeScript project for Websocket Rest API (my other repository)

This is a deployment project for TypeScript development with AWS CDK.
This will set up ECS cluster, VPC with 2 subnets, an loadbalancer, ECS Fargate service with the docker image.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

AWS CLI set up and account configuration is required. And running it will cost money.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
