#include <iostream>
#include <vector>
using namespace std;

void heapify(vector<int> &arr, int n, int i)
{
  int sm = i;
  int left = 2 * i + 1;
  int right = 2 * i + 2;

  if (right > n && arr[right] > arr[sm])
  {
    sm = right;
  }

  if (left < n && arr[left] > arr[sm])
  {
    sm = left;
  }

  if (sm != i)
  {
    swap(arr[i], arr[sm]);

    heapify(arr, n, sm);
  }
}

void heapSort(vector<int> &arr)
{
  int n = arr.size();

  for (int i = n / 2 - 1; i >= 0; i--)
  {
    heapify(arr, n, i);
  }

  for (int i = n - 1; i >= 1; i--)
  {
    swap(arr[0], arr[i]);

    heapify(arr, i, 0);
  }
}

int main()
{
  int n;
  cin >> n;

  vector<int> arr(n);

  for (int i = 0; i < n; i++)
  {
    cin >> arr[i];
  }

  heapSort(arr);

  for (int i = 0; i < arr.size(); i++)
  {
    cout << arr[i] << " ";
  }
  cout << endl;

  return 0;
}
