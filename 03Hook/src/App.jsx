import React from 'react';

const App = () => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="flex items-center space-x-4 bg-white p-4 rounded-md shadow">
        <div className="w-10 h-10">
          <img src="pexels.jpg" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div>
          <h1 className="text-xl font-semibold">Lorem ipsum dolor</h1>
          <h3 className="text-sm text-gray-600">Rating: 8.2</h3>
        </div>
      </div>
      <p className="mt-4 text-justify bg-white p-4 rounded-md shadow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugit, placeat aliquam, dicta quo et iste illum laudantium aspernatur tempora voluptatibus? Harum dolorum consequuntur, ea tempora deserunt ducimus asperiores reprehenderit voluptates modi perferendis aspernatur id quos sunt odit recusandae illum consequatur doloribus aliquid magni esse nisi enim repellendus nam? Quis sunt quos voluptatum tempore hic nisi dolorem doloribus non ipsa?
      </p>
    </div>
  );
}

export default App;
