
# React Router Learning & Movies App Project

## 🚀 Live Demo

View the deployed project here: [moviepath.netlify.app](https://moviepath.netlify.app)

## 1. About the Learning in this Folder

In this folder, I started learning the `React Router` library. The focus was on understanding how to implement client-side routing in React applications, including:
- Defining static and dynamic routes
- Navigating between pages using `Link` and `NavLink`
- Accessing route parameters with `useParams`
- Fetching data using loader functions
- Using `useLoaderData` to access pre-fetched data
- Handling errors with error boundaries and `errorElement`
- Understand and implement the `Dynamic Routing`

## 2. About the Project Built During Learning

To practice these concepts, I built a small project called **Movies App**. This app allows users to:
- View a list of movies
- Click on a movie to see its details (using dynamic routing)
- Fetch movie data from the OMDB API
- Experience route-based data loading and error handling

The project structure demonstrates modular React component design, route configuration, and real-world usage of React Router features.

## 3. Revisable Note: React Router Dynamic Routing Flow

### Revisable Note: React Router Routing & Dynamic Routing (In-depth)

#### A. Routing Basics in React Router
- **Route Object Parameters in Static Routing:**
	- `children`: An array of nested route objects, used for nested routing.
		```js
		{
			path: "/",
			element: <AppLayout />, // parent layout
			children: [
				{ path: "about", element: <About /> },
				{ path: "movies", element: <Movies /> }
			]
		}
		```
	- `errorElement`: A React element to render if an error occurs while loading the route or its loader.
		```js
		{
			path: "/",
			element: <AppLayout />, 
			errorElement: <ErrorPage />,
			children: [ ... ]
		}
		```

- **The `<Outlet />` Component:**
	- Used in a parent route component to render the matched child route's element.
	- Example:
		```jsx
		import { Outlet } from "react-router-dom";
		const AppLayout = () => (
			<div>
				<Header />
				<Outlet /> {/* Renders the matched child route */}
				<Footer />
			</div>
		);
		```

- **Using `useParams` in a Component:**
	- Access route parameters inside any routed component.
		```jsx
		import { useParams } from "react-router-dom";
		const MovieDetails = () => {
			const { imdbID } = useParams();
			return <div>Movie ID: {imdbID}</div>;
		};
		```

- **Accessing Params in a Loader Function (Modern):**
	- Loader functions receive a `params` object as an argument.
		```js
		// In your route config
		loader: async ({ params }) => {
			const res = await fetch(`https://www.omdbapi.com/?i=${params.imdbID}&apikey=YOUR_KEY`);
			return res.json();
		}
		```

- **Static Routes:**
	- Define a fixed path for a component.
	- Example:
		```js
		{
			path: "/about",
			element: <About />
		}
		```
- **Dynamic Routes:**
	- Use a colon (`:`) to declare a dynamic segment in the path.
	- Example:
		```js
		{
			path: "/movies/:imdbID",
			element: <MovieDetails />
		}
		```
- **Route Parameters:**
	- Dynamic segments (like `:imdbID`) are accessible in the component via the `useParams` hook.
	- Example:
		```jsx
		import { useParams } from "react-router-dom";
		const { imdbID } = useParams();
		```
- **Navigation:**
	- Use `<Link>` or `<NavLink>` to navigate to both static and dynamic routes.
	- Example:
		```jsx
		<NavLink to="/about">About</NavLink>
		<NavLink to={`/movies/${imdbID}`}>Details</NavLink>
		```

---


### B. React Router `<Form>` Component: In-depth Notes

- **Purpose:**
	- The `<Form>` component in React Router is a replacement for the native HTML `<form>`, designed to work seamlessly with React Router's data APIs (loaders, actions, navigation, etc.).
	- It enables declarative navigation and data mutations (like POST, PUT, DELETE) that integrate with route actions.

- **Basic Usage:**
	```jsx
	import { Form } from "react-router-dom";
	<Form method="post" action="/contact">
		<input name="message" />
		<button type="submit">Send</button>
	</Form>
	```

- **Parameters:**
	- `method`: Specifies the HTTP method to use when submitting the form (e.g., "get", "post", "put", "delete").
		- Default is "get".
		- Determines which route action will handle the submission.
	- `action`: The path or URL to which the form will be submitted.
		- If omitted, submits to the current route.
		- Can be relative or absolute.

- **How It Works:**
	- On submit, React Router intercepts the request and calls the `action` function defined in your route config for the target path.
	- The action function receives the form data and can perform mutations (e.g., save to a database, send an email, etc.).
	- After the action resolves, navigation or data revalidation can occur automatically.

- **Example: Route with Action and Form**
	```js
	// In your route config
	{
		path: "/contact",
		element: <ContactPage />,
		action: async ({ request }) => {
			const formData = await request.formData();
			const message = formData.get("message");
			// handle the message (e.g., send to server)
			return { success: true };
		}
	}
	```
	```jsx
	// In your component
	import { Form, useActionData } from "react-router-dom";
	const ContactPage = () => {
		const actionData = useActionData();
		return (
			<Form method="post">
				<input name="message" />
				<button type="submit">Send</button>
				{actionData?.success && <p>Message sent!</p>}
			</Form>
		);
	};
	```

- **Key Points:**
	- `<Form>` enables progressive enhancement: works with JS enabled or disabled.
	- Integrates with route actions for data mutations.
	- Supports all HTTP methods and custom actions.
	- Use `useActionData` to access the result of the action in your component.

- **References:**
	- [React Router Docs: Form](https://reactrouter.com/en/main/components/form)
	- [React Router Docs: Actions](https://reactrouter.com/en/main/route/action)



### C. Revisable Note: React Router Form Submission & Action Flow

#### 1. Form Submission
- When a user submits a `<Form method="POST" action="/contact">`, React Router intercepts the request (no page reload).

#### 2. Route Action Function
- In your route config, the `/contact` path is associated with an `action` function (e.g., `contactdata`).
	```js
	{
		path: "/contact",
		element: <Contact />, 
		action: contactdata
	}
	```

#### 3. How the Action Function Works
- React Router calls your `contactdata` function and passes it an object with the `request` property.
- Inside `contactdata`, you use `await request.formData()` to get the submitted form data.
- You can convert the form data to a plain object and process it (e.g., save to a database, send an email, etc.).
- The action function can return data, a redirect, or `null`.
	```js
	export const contactdata = async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		// process data here
		return null;
	};
	```

#### 4. What Happens Next
- If your action returns data, you can access it in your component using the `useActionData` hook.
- If your action returns a redirect, React Router will navigate to the new location.
- If your action throws an error, the `errorElement` for the route will render.

#### 5. Summary of the Flow
1. User submits the form.
2. React Router intercepts the request and calls the `action` function (`contactdata`).
3. The action function processes the form data.
4. The result of the action (data, redirect, or error) determines what happens next in the UI.

**In short:**
Your action function (e.g., `contactdata`) becomes the handler for the route. It receives the form submission, processes the data, and controls what happens after the form is submitted—all without a full page reload.



### React Router Dynamic Routing: Complete Flow & Revision Note

#### 1. Define Routes (with Dynamic Segments and Loader)
- Use a colon (`:`) to define dynamic segments in your route path.
- Attach a `loader` function to fetch data before rendering the component.

```js
{
	path: "/movies/:imdbID",
	element: <MovieDetails />, 
	loader: async ({ params }) => {
		const res = await fetch(`https://www.omdbapi.com/?i=${params.imdbID}&apikey=YOUR_KEY`);
		if (!res.ok) throw new Error("Failed to fetch");
		return res.json();
	}
}
```

#### 2. Navigation
- Use `<Link>` or `<NavLink>` to navigate, passing the dynamic value in the URL.

```jsx
<NavLink to={`/movies/${imdbID}`}>Details</NavLink>
```

#### 3. Access Route Params (if needed)
- Use the `useParams` hook to access dynamic segments from the URL.

```jsx
import { useParams } from "react-router-dom";
const { imdbID } = useParams();
```

#### 4. Access Loader Data in the Component
- Use the `useLoaderData` hook to get data fetched by the loader.

```jsx
import { useLoaderData } from "react-router-dom";
export const MovieDetails = () => {
	const data = useLoaderData();
	return <div>{JSON.stringify(data)}</div>;
};
```

#### 5. Component Structure
- Keep your components modular:
	- Layout components (Header, Footer, etc.)
	- Page components (Home, Movies, MovieDetails, etc.)
	- UI components (Card, Button, etc.)

#### 6. Error Handling
- Use `errorElement` in your route config or an error boundary to catch and display errors.

#### 7. Typical Flow Example
1. User clicks "Details" on a movie card.
2. App navigates to `/movies/tt1234567`.
3. The loader function fetches movie data using `imdbID`.
4. `MovieDetails` component loads and gets the data from `useLoaderData`.
5. Data is displayed immediately.

#### 8. Recap/Debugging Steps
- Check route definitions and loader functions.
- Follow navigation from UI to route.
- See how params are accessed and used.
- Review how loader data is accessed and displayed.
- Check error handling for failed fetches.

#### Summary Table

| Step                | Tool/Hook/Concept         | Purpose                                  |
|---------------------|--------------------------|-------------------------------------------|
| Define Route        | `:param`, `loader`       | Dynamic path, pre-fetch data              |
| Navigation          | `<Link>`, `<NavLink>`    | Move between pages                        |
| Access Params       | `useParams`              | Get dynamic URL values (if needed)        |
| Access Loader Data  | `useLoaderData`          | Use pre-fetched data in component         |
| Error Handling      | `errorElement`           | Show errors for failed routes/fetches     |

**Tip:**
When revisiting, always trace:
Route → Loader → useLoaderData → Display → Error Handling

This cycle will help you quickly understand and debug any React Router project with dynamic routing and loaders!