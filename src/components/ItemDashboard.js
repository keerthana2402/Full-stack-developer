import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Alert } from "react-bootstrap";
import { FaPlus, FaSearch, FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import "./ItemDashboard.css";

// A custom component for the left sidebar
function Sidebar(props) {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <a href="/home" className="sidebar-link">
            Home
          </a>
        </li>
        <li className="sidebar-item active">
          <a href="/items" className="sidebar-link">
            Items
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/customers" className="sidebar-link">
            Customers
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/build" className="sidebar-link">
            Build
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/sales-orders" className="sidebar-link">
            Sales Orders
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/suppliers" className="sidebar-link">
            Suppliers
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/manufacturers" className="sidebar-link">
            Manufacturers
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/purchase-orders" className="sidebar-link">
            Purchase Orders
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/reports" className="sidebar-link">
            Reports
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/integrations" className="sidebar-link">
            Integrations
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/help" className="sidebar-link">
            Help
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/logout" className="sidebar-link">
            Logout
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/my-profile" className="sidebar-link">
            My Profile
          </a>
        </li>
      </ul>
    </div>
  );
}

// A custom component for the top bar
function Topbar(props) {
  return (
    <div className="topbar">
      <h1 className="topbar-title">{props.title}</h1>
      <div className="topbar-icons">
        <a href="/settings" className="topbar-icon">
          <FaCog />
        </a>
        <a href="/info" className="topbar-icon">
          <FaInfoCircle />
        </a>
      </div>
    </div>
  );
}

// A custom component for the stock status indicator
function StockStatus(props) {
  // Define the colors for different stock statuses
  const colors = {
    ample: "green",
    low: "yellow",
    out: "red",
  };

  // Return a circle with the corresponding color
  return (
    <div
      className="stock-status"
      style={{ backgroundColor: colors[props.status] }}
    ></div>
  );
}

// A custom component for the tag icon
function TagIcon(props) {
  // Define the colors for different tags
  const colors = {
    flowers: "pink",
    leaves: "green",
    ocean: "blue",
    bee: "yellow",
  };

  // Return a circle with the corresponding color and text
  return (
    <div className="tag-icon" style={{ backgroundColor: colors[props.tag] }}>
      {props.tag}
    </div>
  );
}

// The main component for the item dashboard
function ItemDashboard() {
  // Define the state variables for the items, categories, filters, sort, search, modals, and alerts
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    category: "All",
    stock: "All",
    tag: "All",
  });
  const [sort, setSort] = useState({
    field: "SKU",
    order: "asc",
  });
  const [search, setSearch] = useState("");
  const [showNewItemModal, setShowNewItemModal] = useState(false);
  const [showNewCategoryModal, setShowNewCategoryModal] = useState(false);
  const [newItem, setNewItem] = useState({
    SKU: "",
    name: "",
    category: "",
    tags: [],
    stock: 0,
  });
  const [newCategory, setNewCategory] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("success");

  // Define the handler functions for the filters, sort, search, modals, and alerts
  const handleFilterChange = (event) => {
    // Update the filters state with the selected value
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  const handleSortClick = (field) => {
    // Check if the field is already sorted
    if (sort.field === field) {
      // Toggle the order between ascending and descending
      setSort({ ...sort, order: sort.order === "asc" ? "desc" : "asc" });
    } else {
      // Set the field and order to ascending
      setSort({ field: field, order: "asc" });
    }
  };

  const handleSearchChange = (event) => {
    // Update the search state with the input value
    setSearch(event.target.value);
  };

  const handleNewItemModalShow = () => {
    // Show the new item modal
    setShowNewItemModal(true);
  };

  const handleNewItemModalClose = () => {
    // Close the new item modal and reset the new item state
    setShowNewItemModal(false);
    setNewItem({
      SKU: "",
      name: "",
      category: "",
      tags: [],
      stock: 0,
    });
  };

  const handleNewItemChange = (event) => {
    // Update the new item state with the input value
    setNewItem({ ...newItem, [event.target.name]: event.target.value });
  };

  const handleNewItemSubmit = () => {
    // Validate the new item input
    if (
      newItem.SKU === "" ||
      newItem.name === "" ||
      newItem.category === "" ||
      newItem.tags.length === 0 ||
      newItem.stock < 0
    ) {
      // Display an error alert
      setAlertMessage("Please fill in all the required fields.");
      setAlertVariant("danger");
      setShowAlert(true);
    } else {
      // Add the new item to the items state
      setItems([...items, newItem]);
      // Close the new item modal and reset the new item state
      setShowNewItemModal(false);
      setNewItem({
        SKU: "",
        name: "",
        category: "",
        tags: [],
        stock: 0,
      });
      // Display a success alert
      setAlertMessage("New item added successfully.");
      setAlertVariant("success");
      setShowAlert(true);
    }
  };

  const handleNewCategoryModalShow = () => {
    // Show the new category modal
    setShowNewCategoryModal(true);
  };

  const handleNewCategoryModalClose = () => {
    // Close the new category modal and reset the new category state
    setShowNewCategoryModal(false);
    setNewCategory("");
  };

  const handleNewCategoryChange = (event) => {
    // Update the new category state with the input value
    setNewCategory(event.target.value);
  };

  const handleNewCategorySubmit = () => {
    // Validate the new category input
    if (newCategory === "") {
      // Display an error alert
      setAlertMessage("Please enter a category name.");
      setAlertVariant("danger");
      setShowAlert(true);
    } else {
      // Add the new category to the categories state
      setCategories([...categories, newCategory]);
      // Close the new category modal and reset the new category state
      setShowNewCategoryModal(false);
      setNewCategory("");
      // Display a success alert
      setAlertMessage("New category added successfully.");
      setAlertVariant("success");
      setShowAlert(true);
    }
  };

  const handleAlertClose = () => {
    // Close the alert
    setShowAlert(false);
  };

  // Define a function to fetch the items and categories data from an API
  // For simplicity, we will use some mock data
  const fetchData = () => {
    // Mock items data
    const