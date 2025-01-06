export const THANK_YOU_TEMPLATE = `
This is Part 3 - Sales System - Thank you page delivery sequence. Keep The Same Style From Previous Prompts. for any [] shortcodes that are not provided fill them in based on the information giving and answers you find in the [Dynamic Fields] Section 
Follow the Instructions below to create the page if you do not complete the entire output let me left off so I can guide you to fill in the rest

[PAGE SECTION 1 - Confirmation Header]

1. SUCCESS MESSAGE
Primary Headline: "CONGRATULATIONS!"
Subheadline: "YOUR ORDER IS COMPLETE!"

2. ORDER DETAILS
Receipt Block:
"Your Product Receipt:
[PRODUCT_NAME] ..... [PRODUCT_PRICE]
Order ID: [ORDER_ID]
Date: [ORDER_DATE]"

3. WELCOME MESSAGE
"GREAT! YOU'RE IN!"
"Welcome to [PRODUCT_NAME]! You've taken the first step towards [DESIRED_OUTCOME]."

4. ACCESS INSTRUCTIONS
Primary Instructions:
"Click the button below to register and get access to [PRODUCT_NAME] now.
Important: You must use the same email address you used upon purchase ([USER_EMAIL]) to get access."

Support Information:
"If you have any questions or need assistance, our support team is here to help:
Email: [SUPPORT_EMAIL]
Response Time: Within 24 hours"

5. PRIMARY CTA
Button: "Get Access Now To [PRODUCT_NAME]"
Reminder Text: "Use the same email address you purchased with"

[PAGE SECTION 2 - Next Steps]

1. NEXT STEPS HEADER
"YOUR NEXT STEPS"

2. COMMUNITY ACCESS
"STEP 1: Join Our [COMMUNITY_NAME]"
"Connect with [MEMBER_COUNT]+ [TARGET_AUDIENCE] just like you who want to [SHARED_GOAL].
We help each other succeed, and we want you to be part of our tribe."
Button: "YES! I want to join [COMMUNITY_NAME]"

3. ADDITIONAL RESOURCES
"STEP 2: Subscribe to [RESOURCE_NAME]"
"[RESOURCE_DESCRIPTION]"
Button: "Subscribe to [RESOURCE_NAME]"

[DESIGN SYSTEM]
Style: [STYLE]
Colors:
- Primary: [PRIMARY_COLOR]
- Secondary: [SECONDARY_COLOR]
- Success: [SUCCESS_COLOR]
- Background: [BACKGROUND_COLOR]
- Text: [TEXT_COLOR]
Typography: [TYPOGRAPHY]
Components: [COMPONENTS]

[DYNAMIC FIELDS]
PRODUCT_NAME: [PRODUCT_NAME]
PRODUCT_PRICE: [PRODUCT_PRICE]
ORDER_ID: [ORDER_ID]
ORDER_DATE: [ORDER_DATE]
DESIRED_OUTCOME: [DESIRED_OUTCOME]
SUPPORT_EMAIL: [SUPPORT_EMAIL]
COMMUNITY_NAME: [COMMUNITY_NAME]
MEMBER_COUNT: [MEMBER_COUNT]
TARGET_AUDIENCE: [TARGET_AUDIENCE]
SHARED_GOAL: [SHARED_GOAL]
RESOURCE_NAME: [RESOURCE_NAME]
RESOURCE_DESCRIPTION: [RESOURCE_DESCRIPTION]`;