# Burger Builder - React Application

# =====  assets =====

# =====  components =====

# =====  components/Burger =====

# Burger.js
## Build Burger component with BurgerIngredients components

# =====  components/Burger/BuildControls =====

# BuildControls.js
## It calls BuildControl for each ingredients available in the state
## It renders price for the burger from BurgerBuilder
## It uses total ingredients state to activate the Order now button

# =====  components/Burger/BuildControls/BuildControl =====

# BuildControl.js
## It has control to add and/or remove ingredients from the Burger

# =====  components/Burger/BurgerIngredient =====

# BurgerIngredient.js
## Add burger ingredients in the burger

# =====  components/Burger/OrderSummary =====

# OrderSummary.js
## It will display order summary of the burger

# =====  components/Logo =====

# Logo.js
## Logo component for the toolbar

# =====  components/Navigation =====

# =====  components/Navigation/NavigationItems =====

# NavigationItems.js
## Wraps all NavigationItem inside it

# =====  components/Navigation/NavigationItems/NavigationItem =====

# NavigationItem.js
## Individual navigation component

# =====  components/Navigation/SideDrawer =====

# SideDrawer.js
## Component for small devices placed for the navigation in the layout

# =====  components/Navigation/DrawerToggle =====

# DrawerToggle.js
## It will toggle SideDrawer component

# =====  components/Navigation/Toolbar =====

# Toolbar.js
## It has menu, logo and navigation for the top of the website

# ===== components/Order =====

# Order.js
## It will display order ingrendients from the database with the price

# ===== components/Order/CheckoutSummary =====

# CheckoutSummary.js
## Component to display burger when checkout hits

# =====  components/UI =====

# =====  components/UI/Backdrop =====

# Backdrop.js
## Provide backdrop for OrderSummary components

# =====  components/UI/Button =====

# Button.js
## Wrapper for all buttons used in the design

# =====  components/UI/Input =====

# Input.js
## Used for the form for different input elements

# =====  components/UI/Modal =====

# Modal.js
## It wraps OrderSummary component

# =====  components/UI/Spinner =====

# Spinner.js
## It will display design for the loading

# =====  containers =====

# =====  containers/Auth =====

# Auth.js
## It provides functionality for the SignUp or Login
## It will store data in firebase authentication

# =====  containers/Auth/Logout =====

# Logout.js

## It provides logout functionality for the user

# =====  containers/BurgerBuilder =====

# BurgerBuilder.js
## It maintains 2 things: Burger and Build Controls
## It has a state for the ingredients element
## It passes total price of the burger to BuildControls
## It maintains the total ingredients state

# =====  containers/Checkout =====

# Checkout.js
## Component to summarize the burger with checkout option

# =====  containers/Checkout/ContactData =====

# ContactData.js
## Form for the final payment

# =====  containers/Orders =====

# Orders.js
## List all previous orders from the database

# =====  hoc =====

# =====  hoc/Auxiliary =====

# Auxiliary.js
## Wrap all elements of any big content file like (Layout.js, OrderSummary.js) in one element

# =====  hoc/Layout =====

# Layout.js
## Root representational component
## It maintains: Toolbar, SidedDrawer, Backdrop

# =====  hoc/withErrorHandler =====

# withErrorHandler.js
## It wraps component or containers to display the error

# =====  shared =====

# utility.js
## Added same code to use in different files

# =====  store =====

# =====  store/actions =====

# actionTypes.js
## It contains action creators

# burgerBuilder.js
## It contains action creators for BurgerBuilder container

# order.js
## It contains action creators for CheckOut and Order container

# =====  store/reducers =====

# auth.js
## It contains reducers for the Auth container

# order.js
## It contains reducers for the CheckOut and Order container

# burgerBuilder.js
## It contains reducers for the BurgerBuilder container

# =====  App.js =====

## It contains BurgerBuilder container wrapped with Layout component

# =====  axios-orders.js =====

## Axios file with baseUrl from Realtime Database of Firebase

# =====  index.js =====

## It renders root element of index.html