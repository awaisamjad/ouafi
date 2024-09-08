import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cubicOut } from 'svelte/easing';
import ClothingItemData from '../data/ClothingItemData.json';

// @ts-ignore
export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const flyAndScale = (
	// @ts-ignore
	node,
	params = { y: -8, x: 0, start: 0.95, duration: 150 }
) => {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	// @ts-ignore
	const scaleConversion = (valueA, scaleA, scaleB) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	// @ts-ignore
	const styleToString = (style) => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, '');
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		// @ts-ignore
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};

// @ts-ignore
/**
 * 
 * @param {number} id 
 * @returns 
 */
export function getClothingItemByID(id) {
	const foundItem = ClothingItemData.find((item) => item.id === id);
	if (foundItem) {
		return foundItem;
	} else {
		console.log('Could not find Clothing Item. Check id value.');
		return null;
	}
}

// @ts-ignore
/**
 *
 * @param {string} name
 * @returns
 */
export function getClothingItemByName(name) {
	const foundItem = ClothingItemData.find((item) => item.name === name);
	if (foundItem) {
		return foundItem;
	} else {
		console.log('Could not find Clothing Item. Check id value.');
		return null;
	}
}

// @ts-ignore
/**
 *
 * @param {string} image
 * @returns
 */
export function getClothingItemByImage(image) {
	const foundItem = ClothingItemData.find((item) => item.image === image);
	if (foundItem) {
		return foundItem;
	} else {
		console.log('Could not find Clothing Item. Check id value.');
		return null;
	}
}

// @ts-ignore
/**
 *
 * @param {number} price
 * @returns
 */
//TODO Not a `unique` function as multiple can have the same price so it should return them all
export function getClothingItemsByPrice(price) {
	const foundItem = ClothingItemData.find((item) => item.price === price);
	if (foundItem) {
		return foundItem;
	} else {
		console.log('Could not find Clothing Item. Check id value.');
		return null;
	}
}

// @ts-ignore
/**
 *
 * @param {string} gender
 * @returns
 */
//TODO Not a `unique` function as multiple can have the same Gender so it should return them all
export function getClothingItemsByGender(gender) {
	const foundItem = ClothingItemData.find((item) => item.gender === gender);
	if (foundItem) {
		return foundItem;
	} else {
		console.log('Could not find Clothing Item. Check id value.');
		return null;
	}
}

// @ts-ignore
/**
 *
 * @param {string} category
 * @returns
 */
//TODO Not a `unique` function as multiple can have the same category so it should return them all
export function getClothingItemsByCategory(category) {
	const foundItem = ClothingItemData.find((item) => item.category === category);
	if (foundItem) {
		return foundItem;
	} else {
		console.log('Could not find Clothing Item. Check id value.');
		return null;
	}
}
