"use strict";

export function replaceTemplateValues(template: string, replacements: Map<string, string>): string {
  let result = template;
  replacements.forEach((value, key) => {
    const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    result = result.replace(regex, value || key);
  });
  return result;
}