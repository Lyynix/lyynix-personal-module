Hooks.on("renderMerchantSheetDSA5", (ie, element, options) => {
  element.find("div.groupbox:has(div.rowtable.inventory:not(:has(> *)))").hide()
})
