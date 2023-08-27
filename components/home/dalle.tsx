import React, { useState } from 'react';

const DalleGenerator: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        try {
            const apiKey = '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'; // Your OpenAI API key

            const response = await fetch('https://api.openai.com/v1/images', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    prompt
                }),
            });

            const imageResponse = await response.json();
            setImageURL(imageResponse.url);
        } catch (error) {
            console.error('Error generating image:', error);
        }

        setLoading(false);
    };

    if (loading) {
        return <Loading />;
    }

    if (imageURL !== '' && !loading) {
        return (
            <div className="imageContainer">
                <img src={imageURL} alt="Generated"></img>
            </div>
        );
    }

    return (
        <div>
            <div className="search-box">
                <form onSubmit={handleSubmit}>
                    <button className="btn-search" type="submit"><i className="fa fa-search"></i></button>
                    <input type="text" id="prompt" name="prompt" className="input-search" onChange={(e) => setPrompt(e.target.value)} placeholder="Generate Image with AI ..."></input>
                </form>
            </div>
        </div>
    );
};

function Loading() {
    return <div>Loading...</div>;
}

export default DalleGenerator;
