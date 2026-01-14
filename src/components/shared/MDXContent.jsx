import { MDXRemote } from 'next-mdx-remote/rsc';

import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { getMdxComponents } from '@/components/shared/Mdx';

export function MDXContent({ source, variant = 'default', idPrefix = '' }) {

    const components = getMdxComponents(variant, idPrefix);

    return (
        <MDXRemote
            source={source}
            components={components}
            options={{
                mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeSlug],
                },
            }}
        />
    );
}