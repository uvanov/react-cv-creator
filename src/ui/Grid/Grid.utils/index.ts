export function prepareGridLayout(layout: number | string[]): string {
  if (typeof layout === 'number') {
    return `repeat(${layout}, 1fr)`;
  } else {
    return layout.join(' ');
  }
};