import { Skeleton, SVGSkeleton } from '@/ui/skeleton/Skeleton';

const LoadingSkeleton = () => (
	<>
		<section className="mt-16 flex flex-col items-center gap-y-12 xl:flex-row xl:justify-between xl:gap-x-20 2xl:gap-x-32">
			<div className="relative w-full min-h-52 aspect-[320/213] max-w-md md:max-w-xl">
				<SVGSkeleton className="shadow-xl w-4 h-4" />
			</div>
			<div className="xl:mt-10 xl:w-full">
				<h2 className="mb-5 xl:mb-8">
					<Skeleton className="w-[48px] max-w-full" />
				</h2>
				<div className="flex flex-col gap-y-12 md:flex-row md:gap-x-12 xl:gap-x-20">
					<dl className="flex flex-col md:w-1/2 gap-y-2">
						<div>
							<dt>
								<Skeleton className="w-[104px] max-w-full" />
							</dt>
							<dd>
								<Skeleton className="w-[48px] max-w-full" />
							</dd>
						</div>
						<div>
							<dt>
								<Skeleton className="w-[96px] max-w-full" />
							</dt>
							<dd>
								<Skeleton className="w-[72px] max-w-full" />
							</dd>
						</div>
						<div>
							<dt>
								<Skeleton className="w-[64px] max-w-full" />
							</dt>
							<dd>
								<Skeleton className="w-[48px] max-w-full" />
							</dd>
						</div>
						<div>
							<dt>
								<Skeleton className="w-[96px] max-w-full" />
							</dt>
							<dd>
								<Skeleton className="w-[120px] max-w-full" />
							</dd>
						</div>
						<div>
							<dt>
								<Skeleton className="w-[72px] max-w-full" />
							</dt>
							<dd>
								<Skeleton className="w-[56px] max-w-full" />
							</dd>
						</div>
					</dl>
					<dl className="flex flex-col md:w-1/2 gap-y-2">
						<div>
							<dt>
								<Skeleton className="w-[144px] max-w-full" />
							</dt>
							<dd>
								<Skeleton className="w-[24px] max-w-full" />
							</dd>
						</div>
						<div>
							<dt>
								<Skeleton className="w-[96px] max-w-full" />
							</dt>
							<dd>
								<Skeleton className="w-[32px] max-w-full" />
							</dd>
						</div>
						<div>
							<dt>
								<Skeleton className="w-[88px] max-w-full" />
							</dt>
							<dd>
								<Skeleton className="w-[112px] max-w-full" />
							</dd>
						</div>
					</dl>
				</div>
				<div className="mt-10 md:mt-14 flex flex-col md:flex-row md:gap-x-5 md:items-center">
					<h3 className="mb-4 md:mb-0">
						<Skeleton className="w-[136px] max-w-full" />
					</h3>
					<p>
						<Skeleton className="w-[248px] max-w-full" />
					</p>
				</div>
			</div>
		</section>
	</>
);

const Loading = () => (
	<div className="flex justify-center w-full h-full p-10">
		<LoadingSkeleton />
	</div>
);

export default Loading;
