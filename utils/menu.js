export function buildMenuTree (menuItems) {
    const menuMap = new Map();

    // Initialize all menu items in the map
    menuItems?.forEach(item => {
        menuMap.set(item.id, { ...item, children: [] });
    });

    const menuTree = [];

    menuItems?.forEach(item => {
        if (item.parentId) {
            // If the item has a parent, push it into the parent's children array
            const parent = menuMap.get(item.parentId);
            if (parent) {
                parent.children.push(menuMap.get(item.id));
            }
        } else {
            // If no parent, it's a top-level menu item
            menuTree.push(menuMap.get(item.id));
        }
    });

    return menuTree;
}