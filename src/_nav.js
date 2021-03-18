export default {
  items: [
    // {
    //   name: 'Dashboard',
    //   url: '/dashboard',
    //   icon: 'icon-speedometer',
    //   badge: {
    //     variant: 'info',
    //     text: 'NEW',
    //   },
    // },
    {
      name: 'Homepage',
      url: '/homepage',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        
      },
    },
    {
      title: true,
      name: 'Modules',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Products',
      url: '/product',
      icon: 'icon-puzzle',
      children: [
        // {
        //   name: 'Products',
        //   url: '/product',
        //   icon: 'icon-puzzle',
        // },
        {
          name: 'Products List',
          url: '/listproduct',
          icon: 'icon-puzzle',
        },    
      ],
    },
    // {
    //   name: 'Users',
    //   url: '/user',
    //   icon: 'icon-user',
    //   children: [
    //     {
    //       name: 'All Users',
    //       url: '/user',
    //       icon: 'icon-cursor',
    //     },
    //     {
    //       name: 'Button dropdowns',
    //       url: '/buttons/button-dropdowns',
    //       icon: 'icon-cursor',
    //     },
       
    //   ],
    // },
  ]
};
