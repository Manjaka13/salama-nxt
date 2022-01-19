import { useState, useEffect } from "react";
import { testService } from "service/";

/*
	Test service
*/

const useTest = (): string | null => {
	const [result, setResult] = useState<string | null>(null);

	useEffect(() => {
		testService()
			.then((data: string) => setResult(data))
			.catch((e) => console.error(e));
	}, []);

	return result;
};

export default useTest;
