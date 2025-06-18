export const isVideoFile = (url) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg'];
    return videoExtensions.some((ext) => {
        console.log(url);
        url?.toLowerCase().endsWith(ext);
    });
};

export function transformMenu (response) {
    const menuItems = response.menuItems.nodes;

    // Create a map of menu items by their ID
    const itemsById = new Map(menuItems.map(item => [item.id, {
        label: item.label,
        id: item.id,
        uri: item.uri,
        items: []
    }]));

    const result = [];

    // Organize menu items into a hierarchical structure
    menuItems.forEach(item => {
        if (item.parentId) {
            const parent = itemsById.get(item.parentId);
            if (parent) {
                parent.items.push(itemsById.get(item.id));
            }
        } else {
            result.push(itemsById.get(item.id));
        }
    });

    return result;
}
