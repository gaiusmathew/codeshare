import React from 'react';
import dynamic from 'next/dynamic';
import '@uiw/react-textarea-code-editor/dist.css';
import ShareModal from './shareModal';

const CodeEditor = dynamic(
    () => import('@uiw/react-textarea-code-editor').then(mod => mod.default),
    { ssr: false }
);

function Editor() {
    const [code, setCode] = React.useState(
        `function add(a, b) {\n  return a + b;\n}`
    );
    return (
        <main>
            <div className='mx-auto py-6 sm:px-6 lg:px-8 h-full'>
                <div>
                    <ShareModal isOpen={true}></ShareModal>
                    <CodeEditor
                        value={code}
                        language='js'
                        placeholder='Write or paste code here and share. Anyone you share with will see code as it is being typed!'
                        onChange={evn => setCode(evn.target.value)}
                        padding={15}
                        className='h-[85vh]'
                        style={{
                            fontSize: 12,
                            backgroundColor: '#f5f5f5',
                            fontFamily:
                                'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                        }}
                    />
                </div>
            </div>
        </main>
    );
}

export default Editor;
