export interface ThankYouConfig {
  product: {
    name: string;
    price: string;
    orderId: string;
    orderDate: string;
  };
  welcome: {
    desiredOutcome: string;
  };
  access: {
    userEmail: string;
    supportEmail: string;
  };
  community: {
    name: string;
    memberCount: string;
    targetAudience: string;
    sharedGoal: string;
  };
  resources: {
    name: string;
    description: string;
  };
}