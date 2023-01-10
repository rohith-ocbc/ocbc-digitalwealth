import tkinter as tk
from pytrends.request import TrendReq

# Create the main window for the app
root = tk.Tk()
root.title("Google Trend Dashboard")

# Create a function to handle user input and query the Google Trend API
def handle_submit():
  # Get the user-entered keyword from the form
  keyword = keyword_entry.get()

  # Query the Google Trend API for data on the keyword
  pytrend = TrendReq()
  trend_data = pytrend.trend({"q": keyword})

  # Extract the trend data from the API response
  trend_data = trend_data.loc[:, "apple"].tolist()

  # Create a string to display the trend data in the GUI
  trend_data_string = ''
  for item in trend_data:
    trend_data_string += f"<p>{item.time}: {item.value}</p>"

  # Display the trend data in the GUI
  trend_data_label.config(text=trend_data_string)

# Create a form for the user to enter a keyword
keyword_label = tk.Label(root, text="Enter a keyword to see the latest Google Trend data:")
keyword_label.pack()

keyword_entry = tk.Entry(root)
keyword_entry.pack()

submit_button = tk.Button(root, text="Submit", command=handle_submit)
submit_button.pack()

# Create a label to display the trend data
trend_data_label = tk.Label(root, text="")
trend_data_label.pack()

# Run the main loop for the app
root.mainloop()
