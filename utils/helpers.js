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

export function parseWpTableToArray (content) {
    if (!content || typeof content !== 'string') return null;

    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        const table = doc.querySelector('table');

        if (!table) return null;

        const rows = table.querySelectorAll('tr');
        if (!rows.length) return null;

        const features = [];

        rows.forEach((row) => {
            const cells = row.querySelectorAll('td');
            if (cells.length === 2) {
                const key = cells[0].textContent.trim();
                const value = cells[1].textContent.trim();
                features.push({ key, value });
            }
        });

        return features.length ? features : null;
    } catch {
        return null;
    }
}


