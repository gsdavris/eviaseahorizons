const MenuFragment = ` 
    menus {
        nodes {
            name
            locations
            id
            slug
            menuItems(first: 100) {
                nodes {
                    label
                    uri
                    id
                    parentId
                }
            }
        }
    }
    companyDetails {
    address
    email
    job
    name
    phone
    tax
    title
    bio
    }
    companySocials {
        location
        name
    }
    `;

export default MenuFragment;
