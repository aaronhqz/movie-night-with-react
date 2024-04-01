import { useState, useEffect } from 'react';

/* useFetch function:
 * Description:
 * Return:
 */
export default function useFetch(url, options) {
	//useStates:
	const [loading, setLoading] = useState(true);
	const [result, setResult] = useState(null);
	const [error, setError] = useState(null);

	//useEffects:
	useEffect(() => {
		(async () => {
			try {
				const res = await fetch(url, options);
				const json = await res.json();

				//update useStates
				setResult(json);
				setLoading(false);
			} catch (asyncError) {
				setError(asyncError);
				setLoading(false);
			}
		})();
	}, [options, url]);

	return { loading, result, error };
}
