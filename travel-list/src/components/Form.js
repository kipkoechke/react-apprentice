import { useState } from "react";

/**
 * The Form component renders a form for adding items to a packing list.
 * @param {object} props - The props passed to the component from its parent.
 * @param {function} props.onAddItems - A function that will be called when the
 * form is submitted, passing in the new item object as an argument.
 */
export default function Form({ onAddItems }) {
  // description and quantity are local component state variables that are used
  // to keep track of what the user has typed into the form's input fields.
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  /**
   * handleSubmit is called whenever the form is submitted.  It prevents the
   * default form submission behavior (i.e. it doesn't cause the page to reload)
   * and checks if the form is valid (i.e. if there is something in the
   * description field).  If the form is valid, it creates a new item object
   * with the current values of description and quantity, and calls the
   * onAddItems function that was passed in as a prop, passing in the new item
   * object.
   * @param {object} e - The event object for the form's submit event.
   */
  function handleSubmit(e) {
    e.preventDefault();

    // If there is no description, do nothing
    if (!description) return;

    // Create a new item object with the current values of description and
    // quantity, and a 'packed' property that is initially set to false
    const newItem = {
      id: Date.now(), // give each item a unique id based on the current time
      description, // set the item's description to the current value of the description state variable
      quantity, // set the item's quantity to the current value of the quantity state variable
      packed: false, // set the item's packed status to false (i.e. not yet packed)
    };

    // Call the onAddItems function that was passed in as a prop, passing in the
    // new item object that was just created.
    onAddItems(newItem);

    // Log the new item object to the console for debugging purposes.
    console.log(newItem);

    // Reset the description and quantity state variables to empty strings, so
    // that the form fields are cleared out after the item has been added.
    setDescription("");
    setQuantity(1);
  }

  // The form itself is rendered using JSX.  The return statement is wrapped in
  // parentheses, and the code inside the curly braces is indented one level
  // deeper than the outer return statement.  This makes the code more readable
  // and easier to understand.
  return (
    // Use HTML5 semantic tags to make the form more accessible to screen readers
    // and other assistive technologies.  The <form> tag has an onSubmit event
    // handler that calls the handleSubmit function when the form is submitted.
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        // Set the select element's value to the current value of the quantity
        // state variable.
        value={quantity}
        // When the user changes the selected option in the select element,
        // update the quantity state variable with the new value.
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* Map over an array of numbers from 1 to 20, and create an option
            element for each one */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        // The type property is set to "text" to create a plain text input field
        type="text"
        // The placeholder property is set to "Item.." to give the user a hint of
        // what to type into the input field
        placeholder="Item.."
        // Bind the input field's value to the description state variable
        value={description}
        // When the user types into the input field, update the description
        // state variable with the new value.
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
