const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_SECRET_KEY: $env.BUILDABLE_STRIPE_SECRET_KEY, // Required
    line_items: [
      {
        adjustable_quantity: { enabled: true, maximum: 0, minimum: 0 },
        price: "string",
        quantity: 0,
      },
    ], // Required

    // after_completion: {
    //     hosted_confirmation: { custom_message: "string" },
    //     redirect: { url: "string" },
    //     type: "hosted_confirmation"
    //   },
    // allow_promotion_codes: "<boolean>",
    // application_fee_amount: "<integer>",
    // application_fee_percent: "<number>",
    // automatic_tax: { enabled: true },
    // billing_address_collection: "<string>",
    // consent_collection: { promotions: "auto" },
    // currency: "<string>",
    // customer_creation: "<string>",
    // expand: ["string"],
    // metadata: { property1: "string", property2: "string" },
    // on_behalf_of: "<string>",
    // payment_intent_data: { capture_method: "automatic", setup_future_usage: "off_session" },
    // payment_method_types: ["affirm"],
    // phone_number_collection: { enabled: true },
    // shipping_address_collection: { allowed_countries: ["AC"] },
    // shipping_options: [{ shipping_rate: "string" }],
    // submit_type: "<string>",
    // subscription_data: { trial_period_days: 0 },
    // tax_id_collection: { enabled: true },
    // transfer_data: { amount: 0, destination: "string" },
    // line_items0Price: "<string>",
    // line_items0Quantity: "<integer>",
    // line_items0Adjustable_quantityEnabled: "<boolean>",
    // line_items0Adjustable_quantityMaximum: "<integer>",
    // line_items0Adjustable_quantityMinimum: "<integer>",
    // line_items1Price: "<string>",
    // line_items1Quantity: "<integer>",
    // line_items1Adjustable_quantityEnabled: "<boolean>",
    // line_items1Adjustable_quantityMaximum: "<integer>",
    // line_items1Adjustable_quantityMinimum: "<integer>",
    // after_completionType: "<string>",
    // after_completionHosted_confirmationCustom_message: "<string>",
    // after_completionRedirectUrl: "<string>",
    // automatic_taxEnabled: "<boolean>",
    // consent_collectionPromotions: "<string>",
    // expand0: "<string>",
    // expand1: "<string>",
    // payment_intent_dataCapture_method: "<string>",
    // payment_intent_dataSetup_future_usage: "<string>",
    // payment_method_types0: "<string>",
    // payment_method_types1: "<string>",
    // phone_number_collectionEnabled: "<boolean>",
    // shipping_address_collectionAllowed_countries0: "<string>",
    // shipping_address_collectionAllowed_countries1: "<string>",
    // shipping_options0Shipping_rate: "<string>",
    // shipping_options1Shipping_rate: "<string>",
    // subscription_dataTrial_period_days: "<integer>",
    // tax_id_collectionEnabled: "<boolean>",
    // transfer_dataDestination: "<string>",
    // transfer_dataAmount: "<integer>",
  };
};
