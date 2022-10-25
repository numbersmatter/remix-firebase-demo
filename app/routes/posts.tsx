import { Outlet } from "@remix-run/react";

export default function PostsRoute(){
  return (
    <div>
      <h1>Posts</h1>
      <main>
        <Outlet />
      </main>
    </div>
  )
}