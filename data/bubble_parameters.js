var BUBBLE_PARAMETERS = {
    "report_title": "OCBC Digital Advisory Bubbles",
    "footer_text": "Digital Wealth Beta 1.0",
    "width": 940,
    "height": 700,
    "force_strength": 0.03,
    "force_type": "charge",
    "radius_field": "1 Monthrank",
    "numeric_fields": ["Long Term Rank", "Relative Valuation Rank", "Percent Away from Target Price", "Pct away from Target Price", "Dividend Yield","Area", "Population", "Density", "Short Term Rank", "Last Close", "1yr Total Return", "Since Inception Return","Colouring", "ESG Score", "Analysts Score: Upside Potential","Avg 12mn Volume(mn)", "1YR RETURN RANK","1month expo","Ann. Returns since inception (Ranked)","ESG score rank","1 Month","3 Year Ann. Return %","MSCI ESG Score","1 Monthrank","Annual mgmt feeranked","ESGRATINGNUM","1 Monthrankk","3ystdevrank"],
    "fill_color": {
        "data_field": "Since Inception Return change",
        "color_groups": {
            "Negative Return": "#d84b2a", //#d84b2a first
            "Between 0 - 7%": "#beccae", //#beccae second         93B664 //B0CE74   { FF6258  96CEB3 R G Combo also 39A985}
            "Above 7% Annual Return": "#7aa25c" // #7aa25c third    39A985 39A985  22EE5B 00BA28
        }
    },

//    "Negative Return": "#d84b2a",F3362A
  //  "Between 0 - 10% Return": "#beccae",5DAB60goodgreen DFBC3Cgood yello goodgreen93B664
  //  "Greater than 10% Return": "#7aa25c"4CA10C  239C73good green 39A985verygood green
    "tooltip": [
        {"title": "Fund", "data_field": "Stock"},
        {"title": "Chinese Name", "data_field": "FundChineseName"},
        {"title": "Region", "data_field": "Sector"},
      //  {"title": "Last Close", "data_field": "Last Close", "format_string": ""},
      //  {"title": "Pct away from Target Price", "data_field": "Pct away from Target Price", "format_string": ",.2r"},
      //  {"title": "Total Return 1 Yr", "data_field": "1yr Total Return", "format_string": ".0%"},
        {"title": "Returns Since Inception", "data_field": "Since Inception Return", "format_string": ".1%"},
        {"title": "Dividend Yield", "data_field": "Dividend Yield", "format_string": ".0%"},
      //  {"title": "Long Term Rank", "data_field": "Long Term Rank", "format_string": ",.2r"},
      //  {"title": "Avg 12 Mth Volume(mn)", "data_field": "avgvol12mnth", "format_string": ""},
        {"title": "ESG Score", "data_field": "MSCI ESG Score", "format_string": ",.2r"},
      //  {"title": "MSCI ESG Rating", "data_field": "ESG Rating"},
        {"title": "MSCI ESG Rating", "data_field": "ESG Ratings"},

      //  {"title": "Relative Valuation Rank", "data_field": "Relative Valuation Rank", "format_string": ",.2r"},
//        {"title": "Population", "data_field": "Population", "format_string": ",.2r"},
//        {"title": "Area (km^2)", "data_field": "Area", "format_string": ",.2r"},
//        {"title": "Density (pop / km^2)", "data_field": "Density"}
    ],
    "modes": [
        {
            "button_text": "Unit Trust Universe",
            "button_id": "all",
            "type": "grid",
            "labels": null,
            "grid_dimensions": {"rows": 1, "columns": 1},
            "data_field": null
        },
        {
            "button_text": "Exposure Focus",
            "button_id": "region",
            "type": "grid",
            "labels": ["Global", "Regional", "Emerging Markets", "Single Country", "Diversified", "High Yield", "Natural Resource", "Asian", "Real Estate", "Global Corp & Credit"],
            "grid_dimensions": {"rows": 3, "columns": 4},
            "data_field": "Focus"
        },
        {
            "button_text": "Dividend Ideas",
            "type": "grid",
            "button_id": "Dividend Yield greater than 5pc",
            "labels": ["Greater than 4% Yield", "Less than 4% Yield", "No Dividend"],
            "grid_dimensions": {"rows": 1, "columns": 3},
            "data_field": "Dividend Yield greater than 5pc"
        },
        {
            "button_text": "Return Since Inception",
            "button_id": "Since Inception Return",
            "type": "grid",
            "labels": ["Above 7% Annual Return", "Between 0 - 7%", "Negative Return"],
            "grid_dimensions": {"rows": 1, "columns": 3},
            "data_field": "Since Inception Return change"
        },
        {
            "button_text": "ESG vs Returns",
            "button_id": "area_vs_population",
            "type": "scatterplot",
            "x_data_field": "MSCI ESG Score",
            "y_data_field": "3 Year Ann. Return %",
            "x_format_string": ",.2r",
            "y_format_string": ",.2r"
        },
        {
            "button_text": "ESG Bucket",
            "type": "grid",
            "button_id": "Quartile",
            "labels": ["Leader", "Average", "Laggard", "Unrated"],
            "grid_dimensions": {"rows": 1, "columns": 4},
            "data_field": "ESG Rating"
        },
        {
            "button_text": "SRS Opportunity",
            "type": "grid",
            "button_id": "srss",
            "labels": ["Above 5% Annual Return", "Below 5%", "No SRS"],
            "grid_dimensions": {"rows": 1, "columns": 3},
            "data_field": "SRSMeet"
        }

    //    {
  //          "button_text": "World Map",
  //          "button_id": "world_map",
  //          "type": "map",
  //          "latitude_field": "Latitude",
  //          "longitude_field": "Longitude"
  //      }
    ]
};
