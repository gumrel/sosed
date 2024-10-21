import { Button as PrimeButton } from 'primereact/button';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function CreateForm() {
	return (
		<div className="bg-white mt-10 mb-10 rounded-md p-5 w-3/6">
			<div className="space-y-12">
				<div className="border-b border-gray-900/10 pb-12">
					<h2 className="text-base font-semibold leading-7 text-gray-900">Добавление объявления</h2>
					<p className="mt-1 text-sm leading-6 text-gray-600">Заполни информацию о себе ниже</p>

					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="col-span-full">
							<label className="block text-sm font-medium leading-6 text-gray-900">
								О себе и квартире
							</label>
							<div className="mt-2">
								<textarea
									id="about"
									name="about"
									rows={2}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									defaultValue={''}
									maxLength={250}
								/>
							</div>
							<p className="mt-3 text-sm leading-6 text-gray-600">
								Эта информация поможет твоим будущим соседям лучше узнать о тебе
							</p>
						</div>

						<div className="col-span-full">
							<label className="block text-sm font-medium leading-6 text-gray-900">Добавь фото</label>
							<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
								<div className="text-center">
									<PhotoIcon className="mx-auto h-12 w-12 text-gray-300" />
									<div className="mt-4 flex text-sm leading-6 text-gray-600">
										<label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
											<span>Загрузи файлы</span>
											<input
												id="file-upload"
												name="file-upload"
												type="file"
												className="sr-only"
											/>
										</label>
										<p className="pl-1">or drag and drop</p>
									</div>
									<p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="border-b border-gray-900/10 pb-12">
					<h2 className="text-base font-semibold leading-7 text-gray-900">Персональная информация</h2>

					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-3">
							<label className="block text-sm font-medium leading-6 text-gray-900">Имя</label>
							<div className="mt-2">
								<input
									id="first-name"
									name="first-name"
									type="text"
									autoComplete="given-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label className="block text-sm font-medium leading-6 text-gray-900">Фамилия</label>
							<div className="mt-2">
								<input
									id="last-name"
									name="last-name"
									type="text"
									autoComplete="family-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-4">
							<label className="block text-sm font-medium leading-6 text-gray-900">
								Социальная сеть для связи
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="col-span-full">
							<label className="block text-sm font-medium leading-6 text-gray-900">Улица</label>
							<div className="mt-2">
								<input
									id="street-address"
									name="street-address"
									type="text"
									autoComplete="street-address"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-2 sm:col-start-1">
							<label className="block text-sm font-medium leading-6 text-gray-900">Город</label>
							<div className="mt-2">
								<input
									id="city"
									name="city"
									type="text"
									autoComplete="address-level2"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label className="block text-sm font-medium leading-6 text-gray-900">Ближайщее метро</label>
							<div className="mt-2">
								<input
									id="region"
									name="region"
									type="text"
									autoComplete="address-level1"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label className="block text-sm font-medium leading-6 text-gray-900">
								Количество соседей
							</label>
							<div className="mt-2">
								<input
									id="postal-code"
									name="postal-code"
									type="text"
									autoComplete="postal-code"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="border-b border-gray-900/10 pb-12">
					<div className="mt-10 space-y-10">
						<fieldset>
							<legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
							<div className="mt-6 space-y-6">
								<div className="relative flex gap-x-3">
									<div className="flex h-6 items-center">
										<input
											id="comments"
											name="comments"
											type="checkbox"
											className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
										/>
									</div>
									<div className="text-sm leading-6">
										<label className="font-medium text-gray-900">Comments</label>
										<p className="text-gray-500">
											Get notified when someones posts a comment on a posting.
										</p>
									</div>
								</div>
								<div className="relative flex gap-x-3">
									<div className="flex h-6 items-center">
										<input
											id="candidates"
											name="candidates"
											type="checkbox"
											className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
										/>
									</div>
									<div className="text-sm leading-6">
										<label className="font-medium text-gray-900">Candidates</label>
										<p className="text-gray-500">
											Get notified when a candidate applies for a job.
										</p>
									</div>
								</div>
								<div className="relative flex gap-x-3">
									<div className="flex h-6 items-center">
										<input
											id="offers"
											name="offers"
											type="checkbox"
											className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
										/>
									</div>
									<div className="text-sm leading-6">
										<label className="font-medium text-gray-900">Offers</label>
										<p className="text-gray-500">
											Get notified when a candidate accepts or rejects an offer.
										</p>
									</div>
								</div>
							</div>
						</fieldset>
						<fieldset>
							<legend className="text-sm font-semibold leading-6 text-gray-900">
								Push Notifications
							</legend>
							<p className="mt-1 text-sm leading-6 text-gray-600">
								These are delivered via SMS to your mobile phone.
							</p>
							<div className="mt-6 space-y-6">
								<div className="flex items-center gap-x-3">
									<input
										id="push-everything"
										name="push-notifications"
										type="radio"
										className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
									/>
									<label className="block text-sm font-medium leading-6 text-gray-900">
										Everything
									</label>
								</div>

								<div className="flex items-center gap-x-3">
									<input
										id="push-nothing"
										name="push-notifications"
										type="radio"
										className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
									/>
									<label className="block text-sm font-medium leading-6 text-gray-900">
										No push notifications
									</label>
								</div>
							</div>
						</fieldset>
					</div>
				</div>
			</div>

			<div className="mt-6 flex items-center justify-end gap-x-6">
				<PrimeButton>Создать объявление</PrimeButton>
			</div>
		</div>
	);
}
