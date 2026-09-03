/**
 * Hush UI - Tree View / Directory Component
 */
export function initTreeViews(container = document) {
  const treeViews = container.querySelectorAll('.ui-tree-view');

  treeViews.forEach((tree) => {
    const rows = tree.querySelectorAll('.ui-tree-row');

    rows.forEach((row) => {
      row.addEventListener('click', (e) => {
        const item = row.closest('.ui-tree-item');
        const hasChildren = item?.querySelector('.ui-tree-children');

        if (hasChildren) {
          item.classList.toggle('is-open');
        }

        // Selection
        tree.querySelectorAll('.ui-tree-row').forEach((r) => r.classList.remove('is-selected'));
        row.classList.add('is-selected');
      });
    });
  });
}
