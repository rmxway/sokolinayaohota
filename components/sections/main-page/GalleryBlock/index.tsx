import { FC, lazy, Suspense, useState } from 'react';

import { GalleryImageType } from '@/types/types';
import { ErrorMessage } from '@/components/ErrorMessage';
import { Container, FetchedImage, Title } from '@/components/Layout';
import { ButtonUI, PageLoader } from '@/components/ui';
import { prefixImages } from '@/services/constants';

import { GalleryImage, Grid, Wrapper } from './styled';
import { Link } from 'react-router';

const ModalGallery = lazy(() => import('@/components/ModalGallery'));

type GalleryBlockProps = {
	data: GalleryImageType[] | undefined;
	error?: string;
};

export const GalleryBlock: FC<GalleryBlockProps> = ({ data, error }) => {
	const [selectedId, setSelectedId] = useState<number>(1);
	const [isOpen, setOpen] = useState(false);
	const [suspended, setSuspended] = useState(false);

	const handleShowImageInModal = (id: number) => {
		setSelectedId(id);
		setOpen((prev) => !prev);
		if (!suspended) setSuspended(true);
	};

	return (
		<Wrapper>
			<Container $grid $gap={40} $direction="row" $center>
				<Title color="disabled">Галерея</Title>

				{data?.length ? (
					<>
						<Grid $gap={20}>
							{data.map((image, idx) => (
								<GalleryImage
									key={image.alt}
									className={idx === 6 ? 'big' : ''}
									onClick={() => handleShowImageInModal(idx)}
								>
									<FetchedImage
										src={`${prefixImages}${image.url}`}
										alt={image.alt}
										width={400}
										height={400}
									/>
								</GalleryImage>
							))}
						</Grid>

						<Link to="/gallery">
							<ButtonUI $brown $mobile>
								Больше фото
							</ButtonUI>
						</Link>
					</>
				) : (
					<ErrorMessage message={error} />
				)}
			</Container>

			{suspended && (
				<Suspense key="Gallery" fallback={<PageLoader />}>
					<ModalGallery
						show={isOpen}
						onClose={() => setOpen((prev) => !prev)}
						gallery={data || []}
						currentId={selectedId}
					/>
				</Suspense>
			)}
		</Wrapper>
	);
};

export default GalleryBlock;
