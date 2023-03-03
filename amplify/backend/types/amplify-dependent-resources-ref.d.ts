export type AmplifyDependentResourcesAttributes = {
  api: {
    mygpt: {
      ApiId: 'string';
      ApiName: 'string';
      RootUrl: 'string';
    };
  };
  function: {
    mygpt: {
      Arn: 'string';
      LambdaExecutionRole: 'string';
      LambdaExecutionRoleArn: 'string';
      Name: 'string';
      Region: 'string';
    };
  };
};
